import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title:'Ahmed Khalil | Odoo ERP Expert',description:'Odoo ERP implementation, customization, integrations and AI solutions across UAE and GCC.' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
