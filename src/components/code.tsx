import { codeToHtml } from "shiki";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { CopyCode } from "./copy";


export const CodeBlock = async ({ code, lang }:
    { code: string, lang: string }
) => {
    const html = await codeToHtml(code, {
        lang,
        theme: 'catppuccin-macchiato',
        colorReplacements: {
            "#24273a": "var(--ctp-macchiato-base)",
        }
    })
    return (
        <Card className="group relative">
            <CardContent className="pt-6">
                <div className='selection:text-base selection:bg-peach' dangerouslySetInnerHTML={{ __html: html }} />
            </CardContent>
            <CopyCode text={code} />
        </Card>
    )
}