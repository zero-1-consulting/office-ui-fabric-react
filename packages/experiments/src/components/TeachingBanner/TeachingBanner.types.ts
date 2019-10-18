import { ITextSlot } from 'office-ui-fabric-react/lib/Text';
import { BaseButton, Button, ITheme, IStackSlot, IStackItemSlot } from 'office-ui-fabric-react';
import { IComponent, IComponentStyles, IHTMLSlot, IStyleableComponentProps, ISlottableProps, IHTMLElementSlot } from '@uifabric/foundation';
import { IFontIconSlot } from '../../utilities/factoryComponents.types';

/**
 * {@docCategory TeachingBanner}
 */
export type ITeachingBannerComponent = IComponent<
  ITeachingBannerProps,
  ITeachingBannerTokens,
  ITeachingBannerStyles,
  ITeachingBannerViewProps
>;

// The following two types are redundant with ITeachingBannerComponent but are needed until TS function return widening issue is resolved:
// https://github.com/Microsoft/TypeScript/issues/241
// For now, these helper types can be used to provide return type safety for tokens and styles functions.

/**
 * {@docCategory TeachingBanner}
 */
export type ITeachingBannerTokenReturnType = ReturnType<Extract<ITeachingBannerComponent['tokens'], Function>>;

/**
 * {@docCategory TeachingBanner}
 */
export type ITeachingBannerStylesReturnType = ReturnType<Extract<ITeachingBannerComponent['styles'], Function>>;

/*
 * Optional interface to use for componentRef. This should be limited in scope with the most common scenario being for focusing elements.
 * {@docCategory TeachingBanner}
 */
export interface ITeachingBanner {}

/**
 * {@docCategory TeachingBanner}
 */
export interface ITeachingBannerSlots {
  /**
   * Root element.
   */
  root?: IStackSlot;

  /**
   * Defines the icon that is displayed in Premium mode.
   * @defaultValue defaultIcon
   */
  icon?: IFontIconSlot;

  /**
   * Component sample prop. If provided, component is controlled.
   */
  textContainer?: IStackItemSlot;

  /**
   * Component sample prop. If provided, component is controlled.
   */
  actionsContainer?: IStackSlot;
}

/**
 * Extending IStyleableComponentProps will automatically add styleable props for you, such as styles, tokens and theme.
 * If you don't want these props to be included in your component, just remove this extension.
 * {@docCategory TeachingBanner}
 */
export interface ITeachingBannerProps  // extends ITeachingBannerSlots,
  extends ISlottableProps<ITeachingBannerSlots>,
    IStyleableComponentProps<ITeachingBannerViewProps, ITeachingBannerTokens, ITeachingBannerStyles> {
  /**
   * Component sample default prop for use if component is uncontrolled.
   * @defaultValue 'Default Icon'
   */
  defaultIcon?: string;

  // // Setting this prop to true will apply different styling to the text slot.
  // warning?: boolean;

  /**
   * The actions you want to show on the other side.
   */
  actions?: JSX.Element;

  /**
   *
   */
  premium?: boolean;

  /**
   * Whether the message bar has a dismiss button and its callback.
   * If null, we don't show a dismiss button.
   * @defaultvalue null
   */
  onDismiss?: (ev?: React.MouseEvent<HTMLElement | BaseButton | Button>) => any;

  /**
   * Aria label on dismiss button if onDismiss is defined.
   */
  dismissButtonAriaLabel?: string;
}

/**
 * {@docCategory TeachingBanner}
 */
export interface ITeachingBannerViewProps extends ITeachingBannerProps {
  // You can define view only props here.
  /**
   * Sample props internal to component. These types of props aren't exposed
   *   externally to consumers and their values are typically determined by component state.
   */
  // clicks: number;
  // onClick?: (ev?: React.MouseEvent<HTMLElement>) => void;
}

/**
 * {@docCategory TeachingBanner}
 */
export interface ITeachingBannerTokens {
  // Define tokens for your component here. Tokens are styling 'knobs' that your component will automatically
  // apply to styling sections in the styles file.
  color?: string;
  background?: string;
}

/**
 * {@docCategory TeachingBanner}
 */
export type ITeachingBannerStyles = IComponentStyles<ITeachingBannerSlots>;
