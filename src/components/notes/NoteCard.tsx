'use client'

import { Note } from '@/types/database'
import { Edit, Trash2 } from 'lucide-react'

interface NoteCardProps {
  note: Note
  onEdit: (note: Note) => void
  onDelete: (id: string) => void
}

export default function NoteCard({ note, onEdit, onDelete }: NoteCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {note.title || 'Untitled'}
        </h3>
        <div className="flex space-x-2 ml-2">
          <button
            onClick={() => onEdit(note)}
            className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={() => onDelete(note.id)}
            className="p-1 text-gray-500 hover:text-red-600 transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {note.content || 'No content'}
      </p>
      <div className="text-xs text-gray-400">
        {note.updated_at !== note.created_at ? 'Updated' : 'Created'} {formatDate(note.updated_at)}
      </div>
    </div>
  )
}