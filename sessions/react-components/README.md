# Components

Components let you divide your application into multiple independent and reusable pieces.

A component can receive props and states

# Class Component

```
class Foo extends React.Component {
    render() {
        return <h1>Hello World</h1>
    }
}
```

# Function Component

```
const Foo = () => {
    return <h1>Hello World</h1>
}
```

```
function Foo() {
    return <h1>Hello World</h1>
}
```

## Blog Application

A simple blog application can be divided into multiple react components

1. Header
2. Menu
3. Search Bar
4. Footer
5. Body
6. Sidebar
7. Post/Article Content