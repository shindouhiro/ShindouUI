# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

:::demo

```vue
<template>
  <s-button type="primary" ml-2>
    Primary
  </s-button>
  <s-button type="danger" ml-2>
    Danger
  </s-button>
  <s-button type="success" ml-2>
    Success
  </s-button>
  <s-button type="info" ml-2>
    Info
  </s-button>
  <s-button type="warning" ml-2>
    Warning
  </s-button>
</template>
```

:::

### 禁用状态

你可以使用 disabled 属性来定义按钮是否被禁用。

使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。
:::demo

```vue
<template>
  <s-button type="primary" ml-2 disabled>
    Primary
  </s-button>
  <s-button type="danger" ml-2 disabled>
    Danger
  </s-button>
  <s-button type="success" ml-2 disabled>
    Success
  </s-button>
  <s-button type="info" ml-2 disabled>
    Info
  </s-button>
  <s-button type="warning" ml-2 disabled>
    Warning
  </s-button>
</template>
```

:::

## 不同尺寸

提供三种不同尺寸的按钮。

:::demo

```vue
<template>
  <s-button size="large" type="primary" ml-2>
    large
  </s-button>
  <s-button size="small" type="primary" ml-2>
    small
  </s-button>
  <s-button type="primary" ml-2>
    default
  </s-button>
</template>
```

:::

## 加载中

点击按钮进行数据加载操作，在按钮上面显示加载状态。

:::demo

```vue
<template>
  <s-button size="large" type="primary" ml-2 loading>
    loading
  </s-button>
</template>
```

:::

## Attributes

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| size    | 尺寸   | string  | large / small / default                               | default |
| type    | 类型   | string  |'primary' / 'danger' / 'success' / 'warning' / 'info'  | primary |
| loading | 加载中 | boolean | —                                                  | false   |
