export default function Section({ title, children, ...props }) { // we can also add id
    return ( // id={id}
        <section {...props}> 
            <h2>{title}</h2> 
            {children}
        </section>
    );
}