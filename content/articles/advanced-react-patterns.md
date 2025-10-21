---
title: 'Advanced React Patterns'
date: '2024-05-15'
description: 'Explore advanced React patterns like render props, higher-order components, and custom hooks'
tags: ['React', 'JavaScript', 'Patterns', 'Advanced']
author: 'Fernando Ibanez'
published: true
---

# Advanced React Patterns

React offers several advanced patterns that can help you write more reusable and maintainable code. Let's explore some of the most useful patterns.

## Render Props Pattern

The render props pattern allows you to share code between components using a prop whose value is a function.

```jsx
function DataProvider({ render }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return render(data);
}

// Usage
<DataProvider
  render={(data) => <div>{data ? <DataList data={data} /> : <Loading />}</div>}
/>;
```

## Higher-Order Components (HOCs)

HOCs are functions that take a component and return a new component with additional functionality.

```jsx
function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const { user } = useAuth();

    if (!user) {
      return <LoginForm />;
    }

    return <Component {...props} user={user} />;
  };
}
```

## Custom Hooks

Custom hooks let you extract component logic into reusable functions.

```jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
```

## Compound Components

This pattern allows you to create components that work together as a cohesive unit.

```jsx
function Tabs({ children, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className="tabs">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { activeIndex, setActiveIndex, index })
      )}
    </div>
  );
}

Tabs.TabList = function TabList({ children, activeIndex, setActiveIndex }) {
  return (
    <div className="tab-list">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isActive: index === activeIndex,
          onClick: () => setActiveIndex(index)
        })
      )}
    </div>
  );
};
```

## Conclusion

These advanced React patterns provide powerful tools for building scalable and maintainable applications. Choose the right pattern based on your specific use case and requirements.
