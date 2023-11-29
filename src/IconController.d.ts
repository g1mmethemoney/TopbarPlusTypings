import type { Theme } from ".";
import Icon from ".";

export type IconAlignment = "left" | "mid" | "right";
declare interface IconController {
	/** It's important you set this to true IconController.voiceChatEnabled = true after enabling
	 * Voice Chat within your experience so that TopbarPlus can account for the BETA VoiceChat label.
	 * More information here: https://devforum.roblox.com/t/introduce-a-voicechatservice-property-or-method-to-see-if-voice-chat-is-enabled-in-that-experience/1999526
	 */
	voiceChatEnabled: boolean;

	/** Set to false to have the topbar persist even when
	 * game:GetService("StarterGui"):SetCore("TopbarEnabled", false) is called.
	 */
	mimicCoreGui: boolean;

	readonly controllerModeEnabled: boolean;
	readonly leftGap: number;
	readonly midGap: number;
	readonly rightGap: number;
	readonly leftOffset: number;
	readonly rightOffset: number;

	/** Sets the default theme which is applied to all existing and future icons. */
	setGameTheme: (theme: Theme) => void;

	/** Changes the DisplayOrder of the TopbarPlus ScreenGui to the given value. */
	setDisplayOrder: (order: number) => void;

	/** When set to false, hides all icons created with TopbarPlus. This can also be achieved by calling
	 * starterGui:SetCore("TopbarEnabled", false).
	 */
	setTopbarEnabled: (toggle: boolean) => void;

	/** Defines the offset width (i.e. gap) between each icon for the given alignment, left, mid, right,
	 * or all alignments if not specified.
	 */
	setGap: (integer: number, alignment: IconAlignment) => void;

	/** Defines the offset from the left side of the screen to the nearest left-set icon. */
	setLeftOffset: (integer: number) => void;

	/** Defines the offset from the right side of the screen to the nearest right-set icon. */
	setRightOffset: (integer: number) => void;

	/** Determines how icons should be positioned on the topbar and moves them accordingly. */
	updateTopbar: () => void;

	/** Calls destroy on the given icon when the player respawns. This is useful for scenarious where
	 * you wish to cleanup icons that are constructed within a Gui with ResetOnSpawn set to true.
	 */
	clearIconOnSpawn: (icon: Icon) => void;

	/** Returns all icons as an array. */
	getIcons: () => Icon[];

	/** Returns the icon with the given name (or false if not found). If multiple icons have the same
	 * name, then one will be returned randomly.
	 */
	getIcon: (name: string) => Icon | undefined;

	/** Hides the fake healthbar (if currently visible) and prevents it becoming visible again (which
	 * normally occurs when the player takes damage).
	 */
	disableHealthbar: (toggle: boolean) => void;

	/** Hides the 'enter controller mode' icon which otherwise appears when a mouse and controller are
	 * enabled.
	 */
	disableControllerOption: (toggle: boolean) => void;
}

declare const IconController: IconController;
export default IconController;
