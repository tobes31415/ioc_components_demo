export interface Component<Arg> {
    (props: Arg): JSX.Element;    
}