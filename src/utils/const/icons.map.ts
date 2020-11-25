import { FC } from 'react'

import BabelSvg from '../../assets/icons/babel.inline.svg'
import CSSSvg from '../../assets/icons/css.inline.svg'
import DockerSvg from '../../assets/icons/docker.inline.svg'
import GitSvg from '../../assets/icons/git.inline.svg'
import JavaScriptSvg from '../../assets/icons/javascript.inline.svg'
import JestSvg from '../../assets/icons/jest.inline.svg'
import NodeSvg from '../../assets/icons/node.inline.svg'
import ReactSvg from '../../assets/icons/react.inline.svg'
import SQLSvg from '../../assets/icons/sql.inline.svg'
import TypeScriptSvg from '../../assets/icons/typescript.inline.svg'
import UtilitiesSvg from '../../assets/icons/utilities.inline.svg'
import WebpackSvg from '../../assets/icons/webpack.inline.svg'
import { Tags } from './Tags.enum'

export const icons = new Map<string, FC>()

icons.set(Tags.Babel, BabelSvg)
icons.set(Tags.CSS, CSSSvg)
icons.set(Tags.Docker, DockerSvg)
icons.set(Tags.Git, GitSvg)
icons.set(Tags.JavaScript, JavaScriptSvg)
icons.set(Tags.Jest, JestSvg)
icons.set(Tags.Node, NodeSvg)
icons.set(Tags.React, ReactSvg)
icons.set(Tags.SQL, SQLSvg)
icons.set(Tags.TypeScript, TypeScriptSvg)
icons.set(Tags.Utilities, UtilitiesSvg)
icons.set(Tags.Webpack, WebpackSvg)
