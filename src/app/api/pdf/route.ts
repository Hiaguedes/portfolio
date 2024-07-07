import { Client } from '@notionhq/client';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN });

export async function GET(request: NextApiRequest) {
    
    const blocks = await notion.blocks.retrieve({ block_id: process.env.NOTION_CURRICULUM_PDF! });
    
    return NextResponse.json(blocks)
  }