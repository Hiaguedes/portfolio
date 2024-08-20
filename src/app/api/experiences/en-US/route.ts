import { TechVariants } from '@/components/ui/portfolio-card';
import { Client } from '@notionhq/client';
import { format } from 'date-fns';
import { NextResponse } from 'next/server';

export type Experiences = { resume: { text: string }[], skills: { name: string }[], period: string, company: { plain_text: string, href?: string }[], role: { plain_text: string }[] }
export type ExperiencesResult = {
    resume: { text: { content: string } };
    skills: { name: TechVariants }[];
    period: string;
    company: {
        plain_text: string;
        href?: string;
    };
    role: { plain_text: string; };
}

const formatDate = (date: Date | undefined) =>
    date ? format(date, "dd/MM/yyyy") : "";

const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN });

export async function GET() {

    const blocks = await notion.databases.query({
        database_id: process.env.NOTION_EXPERIENCES_TABLE!,
    });

    const map: ExperiencesResult[] = (blocks.results as unknown as { properties: any }[]).map((block) => ({
        resume: block?.properties['Resume'].rich_text[0],
        skills: block?.properties['Habilidades'].multi_select,
        period: `${formatDate(block?.properties['Periodo'].date.start)} - ${formatDate(block?.properties['Periodo']?.date.end) ?? "Emprego Atual"}`,
        company: block?.properties['Empresa'].title[0],
        role: block?.properties['Role'].rich_text[0],
    }))

    return NextResponse.json(map)
}