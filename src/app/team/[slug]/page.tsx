import { siteContent } from '@/data/content';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    
    // For now, return a simple page since the team structure doesn't support dynamic routing
    // This would need to be updated based on the actual team data structure
    return notFound();
} 