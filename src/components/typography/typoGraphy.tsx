import { cn } from '@/app/lib/utils';
import { HTMLAttributes, ElementType, ReactNode } from 'react';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'subtitle' | 'body' | 'caption' | 'overline';

type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant: TypographyVariant;
  as?: TypographyElement;
  className?: string;
  lineClamp?: 1 | 2 | 3 | 4 | 5 | 6;
  align?: 'left' | 'center' | 'right' | 'justify';
  color?: 'black' | 'primary' | 'secondary' | 'muted' | 'error' | 'success' | 'warning';
  responsive?: boolean;
}

const variantToElement: Record<TypographyVariant, TypographyElement> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle: 'p',
  body: 'p',
  caption: 'span',
  overline: 'span',
};

const variantToSize: Record<TypographyVariant, string> = {
  h1: 'text-[32px] leading-[38px] sm:text-[40px] sm:leading-[46px] md:text-[48px] md:leading-[54px] lg:text-[52px] lg:leading-[60px] xl:text-[56px] xl:leading-[64px]',
  h2: 'text-[28px] leading-[34px] sm:text-[32px] sm:leading-[38px] md:text-[40px] md:leading-[46px] lg:text-[48px] lg:leading-[54px] xl:text-[52px] xl:leading-[60px]',
  h3: 'text-[22px] leading-[28px] sm:text-[24px] sm:leading-[30px] md:text-[26px] md:leading-[32px] lg:text-[28px] lg:leading-[34px] xl:text-[32px] xl:leading-[38px]',
  subtitle: 'text-[16px] leading-[24px] sm:text-[17px] sm:leading-[25px] md:text-[18px] md:leading-[26px] lg:text-[19px] lg:leading-[27px] xl:text-[20px] xl:leading-[28px]',
  body: 'text-[14px] leading-[22px] sm:text-[15px] sm:leading-[23px] md:text-[16px] md:leading-[24px] lg:text-[17px] lg:leading-[25px] xl:text-[18px] xl:leading-[26px]',
  caption: 'text-[12px] leading-[18px] sm:text-[13px] sm:leading-[19px] md:text-[14px] md:leading-[20px] lg:text-[14px] lg:leading-[20px]',
  overline: 'text-[10px] leading-[16px] sm:text-[11px] sm:leading-[17px] md:text-[12px] md:leading-[18px] uppercase tracking-wider',
};

const variantToWeight: Record<TypographyVariant, string> = {
  h1: 'font-bold',
  h2: 'font-bold',
  h3: 'font-semibold',
  subtitle: 'font-medium',
  body: 'font-normal',
  caption: 'font-normal',
  overline: 'font-medium',
};

const variantToSpacing: Record<TypographyVariant, string> = {
  h1: 'mb-4 sm:mb-5 md:mb-6',
  h2: 'mb-3 sm:mb-4 md:mb-5',
  h3: 'mb-2 sm:mb-3 md:mb-4',
  subtitle: 'mb-2 sm:mb-3',
  body: 'mb-1 sm:mb-2',
  caption: 'mb-1',
  overline: 'mb-1',
};

const colorClasses = {
  black: 'text-black',
  primary: 'text-gray-900 dark:text-gray-100',
  secondary: 'text-gray-700 dark:text-gray-300',
  muted: 'text-gray-500 dark:text-gray-400',
  error: 'text-red-600 dark:text-red-400',
  success: 'text-green-600 dark:text-green-400',
  warning: 'text-yellow-600 dark:text-yellow-400',
};

const lineClampClasses = {
  1: 'line-clamp-1',
  2: 'line-clamp-2',
  3: 'line-clamp-3',
  4: 'line-clamp-4',
  5: 'line-clamp-5',
  6: 'line-clamp-6',
};

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

const getFluidTypography = (variant: TypographyVariant): string => {
  const fluidConfig = {
    h1: 'text-4xl min-[480px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl',
    h2: 'text-3xl min-[480px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
    h3: 'text-2xl min-[480px]:text-3xl sm:text-4xl md:text-5xl',
    subtitle: 'text-lg min-[480px]:text-xl sm:text-2xl',
    body: 'text-base min-[480px]:text-lg sm:text-xl',
    caption: 'text-sm min-[480px]:text-base sm:text-lg',
    overline: 'text-xs min-[480px]:text-sm sm:text-base',
  };

  return fluidConfig[variant] || '';
};

export function Typography({
  children,
  variant,
  as,
  className = '',
  lineClamp,
  align = 'left',
  color = 'black',
  responsive = true,
  ...props
}: TypographyProps) {
  const Component = as || variantToElement[variant];
  const sizeClass = responsive ? variantToSize[variant] : getFluidTypography(variant);
  const weightClass = variantToWeight[variant];
  // const spacingClass = variantToSpacing[variant];

  const classes = cn(
    'typography',
    sizeClass,
    weightClass,
    // spacingClass,
    lineClamp && lineClampClasses[lineClamp],
    alignClasses[align],
    colorClasses[color],
    'break-words',
    'hyphens-auto',
    'transition-colors duration-200',
    'antialiased',
    '-webkit-text-size-adjust: 100%',
    'text-black',
    className
  );

  return (
    <Component
      className={classes}
      {...props}
    >
      {children}
    </Component>
  );
}

export const H1 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h1" {...props} />
);

export const H2 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h2" {...props} />
);

export const H3 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h3" {...props} />
);

export const Subtitle = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="subtitle" {...props} />
);

export const Body = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="body" {...props} />
);

export const Caption = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="caption" {...props} />
);

export const Overline = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="overline" {...props} />
);