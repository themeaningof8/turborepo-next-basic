module.exports = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  background: {
    DEFAULT: "hsl(0, 0%, 100%)",
    dark: "hsl(224, 71%, 4%)"
  },
  foreground: {
    DEFAULT: "hsl(222.2, 47.4%, 11.2%)",
    dark: "213 31% 91%"
  },
  muted: {
    DEFAULT: "hsl(210, 40%, 96.1%)",
    foreground: "hsl(215.4, 16.3%, 46.9%)",
    dark: {
      DEFAULT: "hsl(223, 47, 11%)",
      foreground: "hsl(215.4, 16.3%, 56.9%)"
    }
  },
  popover: {
    DEFAULT: {
      background: "hsl(0, 0%, 100%)",
      foreground: "hsl(222.2, 47.4%, 11.2%)"
    },
    dark: {
      background: "hsl(224, 71%, 4%)",
      foreground: "hsl(215, 20.2%, 65.1%)"
    }
  },
  card: {
    DEFAULT: "hsl(0, 0%, 100%)",
    foreground: "hsl(222.2, 47.4%, 11.2%)",
    dark: {
      DEFAULT: "hsl(224, 71%, 4%)",
      foreground: "hsl(213, 31%, 91%)"
    }
  },
  border: {
    DEFAULT: "hsl(214.3, 31.8%, 91.4%)",
    dark: "hsl(216, 34%, 17%)"
  },
  input: {
    DEFAULT: "hsl(214.3, 31.8%, 91.4%)",
    dark: "hsl(216, 34%, 17%)"
  },
  primary: {
    DEFAULT: "hsl(222.2, 47.4%, 11.2%)",
    foreground: "hsl(210, 40%, 98%)",
    dark: {
      DEFAULT: "hsl(210, 40%, 98%)",
      foreground: "hsl(222.2, 47.4%, 1.2%)"
    }
  },
  secondary: {
    DEFAULT: "hsl(210, 40%, 96.1%)",
    foreground: "hsl(222.2, 47.4%, 11.2%)",
    dark: {
      DEFAULT: "hsl(222.2, 47.4%, 11.2%)",
      foreground: "hsl(210, 40%, 98%)"
    }
  },
  accent: {
    DEFAULT: "hsl(210, 40%, 96.1%)",
    foreground: "hsl(222.2, 47.4%, 11.2%)",
    dark: {
      DEFAULT: "hsl(216, 34%, 17%)",
      foreground: "hsl(210, 40%, 98%)"
    }
  },
  destructive: {
    DEFAULT: "hsl(0, 100%, 50%)",
    foreground: "hsl(210, 40%, 98%)",
    dark: {
      DEFAULT: "hsl(0, 63%, 31%)",
      foreground: "hsl(210, 40%, 98%)"
    }
  },
  ring: {
    DEFAULT: "hsl(215, 20.2%, 65.1%)",
    dark: "hsl(216, 34%, 17%)"
  },
  auto: "auto"
}