'use client'
import { useState } from 'react'
import { Clipboard, CheckCheck } from 'lucide-react'


export const CopyCode = ({ text }: { text: string }) => {
    const [copied, setCopied] = useState(false)
    return (
        <button
            onClick={() => {
                navigator.clipboard.writeText(text)
                setCopied(true)
                setTimeout(() => {
                    setCopied(false)
                }, 2000)
            }}
            className=" duration-300 hover:text-background hover:bg-text hover:border absolute top-1 right-1 p-1 text-sm text-text border-none rounded-md">
            {copied ? <CheckCheck className=' size-4' /> :
                <Clipboard className=' size-4' />}
        </button>
    )
}