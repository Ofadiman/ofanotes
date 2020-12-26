import { FC } from 'react'

import BabelSvg from '../../assets/icons/babel.inline.svg'
import CodeSvg from '../../assets/icons/code.inline.svg'
import CSSSvg from '../../assets/icons/css.inline.svg'
import DatabaseSvg from '../../assets/icons/database.inline.svg'
import DockerSvg from '../../assets/icons/docker.inline.svg'
import FigmaSvg from '../../assets/icons/figma.inline.svg'
import GitSvg from '../../assets/icons/git.inline.svg'
import HTML5Svg from '../../assets/icons/html5.inline.svg'
import JavaScriptSvg from '../../assets/icons/javascript.inline.svg'
import JestSvg from '../../assets/icons/jest.inline.svg'
import LinuxSvg from '../../assets/icons/linux.inline.svg'
import NodeSvg from '../../assets/icons/node.inline.svg'
import ReactSvg from '../../assets/icons/react.inline.svg'
import TypeScriptSvg from '../../assets/icons/typescript.inline.svg'
import WebpackSvg from '../../assets/icons/webpack.inline.svg'
import { Tags } from './Tags.enum'

export const icons = new Map<Tags, FC>()

icons.set(Tags.Babel, BabelSvg)
icons.set(Tags.CSS, CSSSvg)
icons.set(Tags.Code, CodeSvg)
icons.set(Tags.Database, DatabaseSvg)
icons.set(Tags.Design, FigmaSvg)
icons.set(Tags.Docker, DockerSvg)
icons.set(Tags.Git, GitSvg)
icons.set(Tags.HTML5, HTML5Svg)
icons.set(Tags.JavaScript, JavaScriptSvg)
icons.set(Tags.Jest, JestSvg)
icons.set(Tags.Linux, LinuxSvg)
icons.set(Tags.Node, NodeSvg)
icons.set(Tags.React, ReactSvg)
icons.set(Tags.TypeScript, TypeScriptSvg)
icons.set(Tags.Webpack, WebpackSvg)
