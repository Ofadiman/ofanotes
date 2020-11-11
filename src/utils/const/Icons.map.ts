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

Icons.set(Tags.CSS, (CSSSvg as unknown) as FC)
Icons.set(Tags.Docker, (DockerSvg as unknown) as FC)
Icons.set(Tags.Git, (GitSvg as unknown) as FC)
Icons.set(Tags.JavaScript, (JavaScriptSvg as unknown) as FC)
Icons.set(Tags.React, (ReactSvg as unknown) as FC)
Icons.set(Tags.SQL, (SQLSvg as unknown) as FC)
Icons.set(Tags.TypeScript, (TypeScriptSvg as unknown) as FC)
Icons.set(Tags.Utilities, (UtilitiesSvg as unknown) as FC)
