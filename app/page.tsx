// Source - https://stackoverflow.com/a/58182678
// Posted by Nico, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-21, License - CC BY-SA 4.0

import { redirect } from 'next/navigation';
export default async function Home() {
    redirect('/cv');
}
