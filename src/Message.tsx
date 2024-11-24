function Message()
{  
    const name = 'Mosh';
    if (name)
    // JSX : JavaScript XML
        return <h1>Hello {name}</h1>;

    return <h1>Hello World</h1>;
}

// To use this
export default Message;