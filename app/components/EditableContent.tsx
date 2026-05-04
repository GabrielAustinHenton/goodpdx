'use client'

import { useState, useEffect, useRef } from 'react'
import { useUser } from '@clerk/nextjs'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TiptapLink from '@tiptap/extension-link'

const ADMIN_EMAIL = 'gabriel@goodpdx.com'

interface Props {
  pageSlug: string
  sectionKey?: string
  className?: string
  children: React.ReactNode
}

export default function EditableContent({ pageSlug, sectionKey = 'main', className, children }: Props) {
  const { user, isLoaded } = useUser()
  const isAdmin = isLoaded && user?.primaryEmailAddress?.emailAddress === ADMIN_EMAIL

  const [savedHtml, setSavedHtml] = useState<string | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch(`/api/content?slug=${encodeURIComponent(pageSlug)}&section=${encodeURIComponent(sectionKey)}`)
      .then(r => r.json())
      .then(data => { if (data.content) setSavedHtml(data.content) })
      .catch(() => {})
  }, [pageSlug, sectionKey])

  const editor = useEditor({
    extensions: [
      StarterKit,
      TiptapLink.configure({ openOnClick: false }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'outline-none min-h-[200px]',
      },
    },
  })

  const handleEdit = () => {
    const html = contentRef.current?.innerHTML || ''
    editor?.commands.setContent(html)
    setIsEditing(true)
    setSaved(false)
    setTimeout(() => editor?.commands.focus(), 50)
  }

  const handleSave = async () => {
    setSaving(true)
    const html = editor?.getHTML() || ''
    const res = await fetch('/api/content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pageSlug, sectionKey, content: html }),
    })
    if (res.ok) {
      setSavedHtml(html)
      setIsEditing(false)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    }
    setSaving(false)
  }

  const handleCancel = () => setIsEditing(false)

  const ToolbarBtn = ({ onClick, active, children }: { onClick: () => void; active?: boolean; children: React.ReactNode }) => (
    <button
      type="button"
      onMouseDown={e => { e.preventDefault(); onClick() }}
      className={`px-2.5 py-1 rounded text-sm font-medium transition-colors ${active ? 'bg-[#1d4a2f] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
    >
      {children}
    </button>
  )

  return (
    <div className="relative">
      {isAdmin && !isEditing && (
        <button
          onClick={handleEdit}
          className="fixed bottom-6 right-6 z-50 bg-[#1d4a2f] text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-lg hover:bg-[#2d6a4f] transition-colors flex items-center gap-2"
        >
          <span>✏️</span> Edit Page
        </button>
      )}

      {saved && (
        <div className="fixed bottom-6 right-6 z-50 bg-green-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-lg">
          ✓ Saved
        </div>
      )}

      {isEditing && (
        <>
          {/* Sticky toolbar */}
          <div className="sticky top-16 z-40 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-wrap items-center gap-1 p-2 mb-3">
            <ToolbarBtn onClick={() => editor?.chain().focus().toggleBold().run()} active={editor?.isActive('bold')}>
              <strong>B</strong>
            </ToolbarBtn>
            <ToolbarBtn onClick={() => editor?.chain().focus().toggleItalic().run()} active={editor?.isActive('italic')}>
              <em>I</em>
            </ToolbarBtn>
            <div className="w-px h-5 bg-gray-200 mx-1" />
            <ToolbarBtn onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} active={editor?.isActive('heading', { level: 2 })}>
              H2
            </ToolbarBtn>
            <ToolbarBtn onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()} active={editor?.isActive('heading', { level: 3 })}>
              H3
            </ToolbarBtn>
            <div className="w-px h-5 bg-gray-200 mx-1" />
            <ToolbarBtn onClick={() => editor?.chain().focus().toggleBulletList().run()} active={editor?.isActive('bulletList')}>
              • List
            </ToolbarBtn>
            <ToolbarBtn onClick={() => editor?.chain().focus().toggleOrderedList().run()} active={editor?.isActive('orderedList')}>
              1. List
            </ToolbarBtn>
            <div className="w-px h-5 bg-gray-200 mx-1" />
            <ToolbarBtn onClick={() => {
              const url = window.prompt('URL')
              if (url) editor?.chain().focus().setLink({ href: url }).run()
            }} active={editor?.isActive('link')}>
              Link
            </ToolbarBtn>
            <ToolbarBtn onClick={() => editor?.chain().focus().unsetLink().run()}>
              Unlink
            </ToolbarBtn>
            <div className="flex-1" />
            <button
              type="button"
              onClick={handleCancel}
              className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="px-4 py-1.5 text-sm font-semibold bg-[#1d4a2f] text-white rounded-lg hover:bg-[#2d6a4f] transition-colors disabled:opacity-50"
            >
              {saving ? 'Saving…' : 'Save'}
            </button>
          </div>

          <div className={`border border-[#1d4a2f]/30 rounded-xl p-4 bg-white/50 ${className || ''}`}>
            <EditorContent editor={editor} className={className} />
          </div>
        </>
      )}

      {!isEditing && (
        <div ref={contentRef} className={className}>
          {savedHtml
            ? <div dangerouslySetInnerHTML={{ __html: savedHtml }} />
            : children
          }
        </div>
      )}
    </div>
  )
}
