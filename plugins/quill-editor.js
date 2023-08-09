import Quill from 'quill';
window.Quill = Quill

import MagicUrl from 'quill-magic-url'
import MarkdownShortcuts from 'quill-markdown-shortcuts-for-vue-quill-editor'

Quill.register('modules/magicUrl', MagicUrl)
Quill.register('modules/markdownShortcuts', MarkdownShortcuts)