import { FC } from 'react'

import CSSSvg from '../../assets/icons/css.inline.svg'
import DockerSvg from '../../assets/icons/docker.inline.svg'
import GitSvg from '../../assets/icons/git.inline.svg'
import JavaScriptSvg from '../../assets/icons/javascript.inline.svg'
import ReactSvg from '../../assets/icons/react.inline.svg'
import SQLSvg from '../../assets/icons/sql.inline.svg'
import TypeScriptSvg from '../../assets/icons/typescript.inline.svg'
import UtilitiesSvg from '../../assets/icons/utilities.inline.svg'
import { Tags } from './Tags.enum'

export const Icons = new Map<string, FC>()

Icons.set(Tags.CSS, CSSSvg)
Icons.set(Tags.Docker, DockerSvg)
Icons.set(Tags.Git, GitSvg)
Icons.set(Tags.JavaScript, JavaScriptSvg)
Icons.set(Tags.React, ReactSvg)
Icons.set(Tags.SQL, SQLSvg)
Icons.set(Tags.TypeScript, TypeScriptSvg)
Icons.set(Tags.Utilities, UtilitiesSvg)
