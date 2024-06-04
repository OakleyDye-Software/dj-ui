import * as React from 'react';
import { useDJContext } from '../../logic/state/GlobalContext';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({ children, className = '', style = {}, ...props }) => {
    const { isMobile } = useDJContext();
    const defaultStyles: React.CSSProperties = {
        maxWidth: '1200px',
        margin: '0 auto',
        marginTop: isMobile ? 60 : 75,
        padding: '0 1rem',
    };

    return (
        <React.Fragment>
            <div className={`container ${className}`} style={{...defaultStyles, ...style}} {...props}>
                {children}
            </div>
        </React.Fragment>
    );
};

export default Container;