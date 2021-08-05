# gatsby-remark-dotnet-fiddle

## Getting Started

Install the plugin:

```
npm i gatsby-remark-dotnet-fiddle
```

or

```
yarn add gatsby-remark-dotnet-fiddle
```

## Example gatsby-config.js

Add `gatsby-remark-dotnet-fiddle` as a child plugin under the `gatsby-transformer-remark` plugin:

```javascript
{
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      {
        resolve: "gatsby-remark-dotnet-fiddle",
        options: {
          height: 600
        }        
      }
    ]
  }
}
```

## Example Usage

In a markdown file, simply copy the URL to any .NET Fiddle and paste it on its own line as follows:

```
---
title: "An example .NET Fiddle"
date: "2021-08-05"
categories: 
  - "Uncategorized"
---

An example .NET Fiddle:

https://dotnetfiddle.net/CsCons 
```

An iframe containing the .NET Fiddle will appear. 🥂

## Credits

I also use this wonderful plugin [@weknow/gatsby-remark-codepen](https://github.com/octahedroid/gatsby-remark-codepen) on my personal blog for showing Codepen snippets which served as the inspiration and basis for this plugin.