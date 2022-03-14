class KsStringBuilder {
    m_strings:string[] = [];
    append(str:string):KsStringBuilder {
        this.m_strings.push(str);
        return this;
    }
    toString():string
    {
        return this.m_strings.join("");
    }
    clear()
    {
        this.m_strings.length = 0;
    }
}    

export {KsStringBuilder};