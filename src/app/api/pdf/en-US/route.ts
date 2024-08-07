import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN });

export async function GET() {

    const blocks = await notion.blocks.retrieve({ block_id: process.env.NOTION_CURRICULUM_PDF_EN! });

    return NextResponse.json(blocks)
}