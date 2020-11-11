import { noteConst } from '../note.const'

export const template = `---
title: {{ ${noteConst.vars.title} }}
createdAt: {{ ${noteConst.vars.createdAt} }}
tags:
{{# each ${noteConst.vars.tags} }}
  - {{ this }}
{{/ each }}
---

# {{ ${noteConst.vars.title} }}

This is the very beginning of "{{ ${noteConst.vars.title} }}".
`
