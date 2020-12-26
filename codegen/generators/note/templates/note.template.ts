import { noteConst } from '../note.const'

export const template = `---
title: {{ ${noteConst.vars.title} }}
createdAt: {{ ${noteConst.vars.createdAt} }}
tags:
{{# each ${noteConst.vars.tags} }}
  - {{ this }}
{{/ each }}
---

<MDXIntro>
  Intro for "{{ ${noteConst.vars.title} }}" at {{ ${noteConst.vars.shortDate} }}
</MDXIntro>
`
