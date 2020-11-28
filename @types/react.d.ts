declare type FCC<T = {}> = (props: T & { children: React.ReactNode }) => JSX.Element | null
declare type FC<T = {}> = (props: T) => JSX.Element | null
