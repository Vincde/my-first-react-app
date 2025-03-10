const drinks = {
    tea: {
        part: 'leaf',
        caffeine: '15-70 mg/cup',
        age: '4000+ years'
    },
    coffee: {
        part:'bean',
        caffeine: '80-185 mg/cup',
        age: '1000+ years'
    }
}

function Drink({name}) {
    const info = drinks[name];
    return(
        <section>
            <h1>{name}</h1>
            <dl>
                <dt>Part of Plant</dt>
                <dd>{info.part}</dd>
                <dt>Caffeine content</dt>
                <dd>{info.caffeine}</dd>
                <dt>Age</dt>
                <dd>{info.age}</dd>
            </dl>
        </section>
    )
}