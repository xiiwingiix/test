var nav_ele = '';

nav_ele += ('<div class="layout">');
nav_ele += ('	<div class="grid">');

// <!-- logo -->
nav_ele += ('		<div class="logo display_flex btn_go_home">');
nav_ele += ('		<svg width="183" height="45" viewBox="0 0 108.44 26.07"><defs><style>.cls-1{fill:#F0F0F1;}</style></defs><g id="레이어_2" data-name="레이어 2"><g id="Layer_1" data-name="Layer 1"><path class="cls-1" d="M36,1.36h2V8.64a1.18,1.18,0,0,1-.25.8.94.94,0,0,1-.76.29H33.3a1.24,1.24,0,0,1-.64-.21,4.05,4.05,0,0,1-.58-.46,3.24,3.24,0,0,1-.42-.54A1,1,0,0,1,31.48,8V1.36h2V4H36Zm0,6.69V5.66H33.45V7.73a.29.29,0,0,0,.32.32ZM40,.44h2V4.49h2.17V6.16H41.92v6.12a.31.31,0,0,1-.25.33,2.47,2.47,0,0,1-.75.09,2.7,2.7,0,0,1-.72-.08A.31.31,0,0,1,40,12.3Z"></path><path class="cls-1" d="M56.53,9.72a.34.34,0,0,1,.36.21,1.78,1.78,0,0,1,.08.63,1.72,1.72,0,0,1-.08.63.34.34,0,0,1-.36.2H44.66V9.72ZM48,8.43a1,1,0,0,1-.58-.23,5.2,5.2,0,0,1-.55-.47,5.52,5.52,0,0,1-.42-.5,1,1,0,0,1-.2-.51V4.07H53V2.88H46.22V1.29h8a.72.72,0,0,1,.5.16.65.65,0,0,1,.18.5V5.66H48.13v.92a.29.29,0,0,0,.06.21.25.25,0,0,0,.17,0h6.56c.19,0,.32.06.37.19a1.79,1.79,0,0,1,.08.61,1.68,1.68,0,0,1-.08.6c0,.13-.18.19-.37.19Z"></path><path class="cls-1" d="M60.25,3.11V7.58a.29.29,0,0,0,.32.33h4.74a.3.3,0,0,1,.32.22,2,2,0,0,1,.07.61,2,2,0,0,1-.07.63.3.3,0,0,1-.32.22H60.1a1.17,1.17,0,0,1-.63-.22,2.81,2.81,0,0,1-.59-.46,4.45,4.45,0,0,1-.42-.53,1,1,0,0,1-.18-.51V1.43h6.23a.31.31,0,0,1,.32.22,2.32,2.32,0,0,1,.07.61,2.37,2.37,0,0,1-.07.63.31.31,0,0,1-.32.22ZM66.6.44h2V4.49h2.17V6.16H68.58v6.12a.31.31,0,0,1-.26.33,2.35,2.35,0,0,1-.74.09,2.65,2.65,0,0,1-.72-.08.32.32,0,0,1-.26-.32Z"></path><path class="cls-1" d="M78.37,3.71A3.18,3.18,0,0,1,78.11,5a3.11,3.11,0,0,1-.74,1,3.51,3.51,0,0,1-1.13.66,3.8,3.8,0,0,1-1.41.25,3.75,3.75,0,0,1-1.4-.25A3.46,3.46,0,0,1,72.31,6a3,3,0,0,1-.74-1,3,3,0,0,1-.26-1.28,3.07,3.07,0,0,1,1-2.31A3.48,3.48,0,0,1,73.43.73a4,4,0,0,1,1.4-.24,4,4,0,0,1,1.41.24,3.53,3.53,0,0,1,1.13.67,3.19,3.19,0,0,1,.74,1A3.22,3.22,0,0,1,78.37,3.71Zm-1.89,0A1.51,1.51,0,0,0,76,2.57a1.63,1.63,0,0,0-1.19-.45,1.59,1.59,0,0,0-1.18.45,1.54,1.54,0,0,0-.45,1.14,1.51,1.51,0,0,0,.45,1.13,1.62,1.62,0,0,0,1.18.43A1.66,1.66,0,0,0,76,4.84,1.48,1.48,0,0,0,76.48,3.71ZM73.81,8H82.2v4.44a1.14,1.14,0,0,1-.25.78,1.06,1.06,0,0,1-.8.27H75.56a1.16,1.16,0,0,1-.6-.2,3.11,3.11,0,0,1-.56-.44,4,4,0,0,1-.41-.51,1,1,0,0,1-.18-.48Zm2,3.58c0,.19.09.28.26.28h4.23V9.65H75.76Zm6.58-4.67a.35.35,0,0,1-.26.35,2,2,0,0,1-.71.1,2,2,0,0,1-.72-.1.35.35,0,0,1-.26-.35V.3h2Z"></path><path class="cls-1" d="M95.24,7.12a.35.35,0,0,1-.26.35,2,2,0,0,1-.71.1,2,2,0,0,1-.72-.1.35.35,0,0,1-.26-.35V5.86H91a1.07,1.07,0,0,1-.28.72,1,1,0,0,1-.74.26H86.25a1.1,1.1,0,0,1-.59-.2,3.58,3.58,0,0,1-.55-.45,2.33,2.33,0,0,1-.43-.51.87.87,0,0,1-.17-.48V.56h1.9V2.11h2.68V.56H91v.79h2.29V.3h1.95ZM86.41,5c0,.14.06.21.19.21h2.49V3.71H86.41Zm4.93,8.78a4.28,4.28,0,0,1-1.4-.23,3.78,3.78,0,0,1-1.14-.66,3.2,3.2,0,0,1-.76-1,2.76,2.76,0,0,1-.28-1.25A2.72,2.72,0,0,1,88,9.42a3,3,0,0,1,.76-1,3.78,3.78,0,0,1,1.14-.66,4.2,4.2,0,0,1,2.8,0,3.78,3.78,0,0,1,1.14.66,3.15,3.15,0,0,1,.77,1,2.85,2.85,0,0,1,.27,1.24,2.89,2.89,0,0,1-.27,1.25,3.39,3.39,0,0,1-.77,1,3.78,3.78,0,0,1-1.14.66A4.28,4.28,0,0,1,91.34,13.8Zm0-1.59a1.6,1.6,0,0,0,1.21-.45,1.57,1.57,0,0,0,.43-1.1,1.54,1.54,0,0,0-.43-1.09,1.6,1.6,0,0,0-1.21-.45,1.58,1.58,0,0,0-1.2.45,1.5,1.5,0,0,0-.43,1.09,1.52,1.52,0,0,0,.43,1.1A1.58,1.58,0,0,0,91.34,12.21ZM91,4.29h2.29V2.92H91Z"></path><path class="cls-1" d="M97.19,7.27V5.73h7.91a.37.37,0,0,1,.37.18,1.73,1.73,0,0,1,.07.6,1.6,1.6,0,0,1-.07.58.37.37,0,0,1-.37.18h-3.34V8.71a.32.32,0,0,1-.24.33,2.85,2.85,0,0,1-1.42,0,.32.32,0,0,1-.24-.33V7.27Zm7.21-4.64a2.34,2.34,0,0,1-.26,1.09,2.62,2.62,0,0,1-.69.83,3.32,3.32,0,0,1-1,.54,4.07,4.07,0,0,1-1.21.18A4,4,0,0,1,100,5.09a3.11,3.11,0,0,1-1-.54,2.79,2.79,0,0,1-.7-.83A2.34,2.34,0,0,1,98,2.63a2.34,2.34,0,0,1,.26-1.09A2.79,2.79,0,0,1,99,.71a3.27,3.27,0,0,1,1-.52A3.74,3.74,0,0,1,101.22,0a3.78,3.78,0,0,1,1.21.19,3.51,3.51,0,0,1,1,.52,2.62,2.62,0,0,1,.69.83A2.34,2.34,0,0,1,104.4,2.63Zm-3.53,10.73a1,1,0,0,1-.53-.19,2.64,2.64,0,0,1-.51-.43,2.5,2.5,0,0,1-.39-.47.82.82,0,0,1-.17-.46v-2h2v1.6c0,.24.11.37.33.37h6.52a.29.29,0,0,1,.31.22,2.41,2.41,0,0,1,.06.6,2.3,2.3,0,0,1-.06.6.3.3,0,0,1-.31.2Zm1.67-10.73a1.23,1.23,0,0,0-.34-.83,1.29,1.29,0,0,0-1-.37,1.31,1.31,0,0,0-1,.37,1.22,1.22,0,0,0-.33.83,1.42,1.42,0,0,0,.08.45,1.62,1.62,0,0,0,.25.39,1.33,1.33,0,0,0,.41.27,1.5,1.5,0,0,0,.58.1,1.4,1.4,0,0,0,.56-.1,1.27,1.27,0,0,0,.42-.27,1.36,1.36,0,0,0,.25-.39A1.2,1.2,0,0,0,102.54,2.63Zm1.3,5.15h2.49V.3h2V10a.34.34,0,0,1-.28.36,3.41,3.41,0,0,1-.69.07,2.25,2.25,0,0,1-.72-.09.36.36,0,0,1-.26-.34V9.39h-2.49Z"></path><path class="cls-1" d="M31.48,17.61h2.78a2.19,2.19,0,0,1,.75.12,1.61,1.61,0,0,1,.57.33,1.39,1.39,0,0,1,.36.53,1.93,1.93,0,0,1,.13.69,1.52,1.52,0,0,1-.22.82,1.49,1.49,0,0,1-.56.5,1.24,1.24,0,0,1,.36.19,1.14,1.14,0,0,1,.29.29,1.63,1.63,0,0,1,.2.42,1.86,1.86,0,0,1,.07.56,2.21,2.21,0,0,1-.12.74,1.84,1.84,0,0,1-.37.6,1.56,1.56,0,0,1-.6.39,2,2,0,0,1-.8.14H32.65a.72.72,0,0,1-.34-.1,2.32,2.32,0,0,1-.73-.71.65.65,0,0,1-.1-.31Zm2.73,2.59a.8.8,0,0,0,.89-.92.74.74,0,0,0-.27-.62,1.1,1.1,0,0,0-.69-.22h-1.7V20.2Zm0,2.9a.92.92,0,0,0,1-1,1.07,1.07,0,0,0-.24-.78,1,1,0,0,0-.73-.25H32.44v1.78a.32.32,0,0,0,.06.23.34.34,0,0,0,.22.06Z"></path><path class="cls-1" d="M37.85,20.19a.17.17,0,0,1-.16-.09.78.78,0,0,1,0-.32.71.71,0,0,1,0-.3.17.17,0,0,1,.16-.09h1.57a1.78,1.78,0,0,1,1.25.36A1.66,1.66,0,0,1,41.06,21v2.82a.16.16,0,0,1-.12.16,1.09,1.09,0,0,1-.34,0c-.32,0-.48-.06-.48-.2h0a3.73,3.73,0,0,1-.71.22,4.07,4.07,0,0,1-.74.08,2.06,2.06,0,0,1-.62-.09,1.27,1.27,0,0,1-.51-.28,1.29,1.29,0,0,1-.35-.47,1.68,1.68,0,0,1-.13-.7,1.6,1.6,0,0,1,.14-.67,1.36,1.36,0,0,1,.38-.5,1.81,1.81,0,0,1,.58-.32,2.37,2.37,0,0,1,.72-.1,3.71,3.71,0,0,1,.67.06c.22,0,.41.09.57.13V21a.82.82,0,0,0-.17-.58.8.8,0,0,0-.59-.18Zm1.07,1.57a1,1,0,0,0-.69.21.72.72,0,0,0-.23.58.71.71,0,0,0,.79.75,3.36,3.36,0,0,0,.71-.08,5.78,5.78,0,0,0,.62-.19V22l-.57-.13A3.21,3.21,0,0,0,38.92,21.76Z"></path><path class="cls-1" d="M45.33,20.83a.64.64,0,0,0-.3-.57,1.39,1.39,0,0,0-.75-.19,1.2,1.2,0,0,0-.38.05,1.51,1.51,0,0,0-.34.13.78.78,0,0,0-.24.19.3.3,0,0,0-.1.22v3.15a.16.16,0,0,1-.13.16,1,1,0,0,1-.33,0,1.05,1.05,0,0,1-.34,0,.16.16,0,0,1-.13-.16V17.43h.93v2.36a.86.86,0,0,1,.22-.2,1.46,1.46,0,0,1,.33-.17l.4-.11a2.18,2.18,0,0,1,.44,0,1.68,1.68,0,0,1,.7.13,1.61,1.61,0,0,1,.52.36,1.69,1.69,0,0,1,.33.53,1.9,1.9,0,0,1,.11.63v2.89a.17.17,0,0,1-.13.16,1.47,1.47,0,0,1-.68,0,.17.17,0,0,1-.13-.16Z"></path><path class="cls-1" d="M49.44,20.19a.85.85,0,0,0-.39.08.87.87,0,0,0-.32.22,1.09,1.09,0,0,0-.23.3.84.84,0,0,0-.08.34v2.68a.16.16,0,0,1-.13.16A1,1,0,0,1,48,24a.92.92,0,0,1-.36-.05.16.16,0,0,1-.12-.15V19.39h.93V20h0a1.22,1.22,0,0,1,.44-.46,1.11,1.11,0,0,1,.64-.17h.85a.17.17,0,0,1,.17.08,1.26,1.26,0,0,1,0,.63.18.18,0,0,1-.17.09Z"></path><path class="cls-1" d="M54.59,23.47h0a1.42,1.42,0,0,1-.63.44,2.57,2.57,0,0,1-.85.14,1.86,1.86,0,0,1-.82-.18,2,2,0,0,1-.65-.51,2.28,2.28,0,0,1-.42-.75,3,3,0,0,1-.15-.95,3.1,3.1,0,0,1,.14-.92,2.23,2.23,0,0,1,.41-.76,1.92,1.92,0,0,1,.67-.52,2.13,2.13,0,0,1,.94-.19,2.22,2.22,0,0,1,.76.14,1.54,1.54,0,0,1,.6.4h0V17.43h.94v6.38a.17.17,0,0,1-.13.16,1.12,1.12,0,0,1-.35,0,1.09,1.09,0,0,1-.34,0,.16.16,0,0,1-.12-.16Zm0-1.77a2.29,2.29,0,0,0-.12-.8,1.44,1.44,0,0,0-.32-.5,1,1,0,0,0-.43-.26,1.38,1.38,0,0,0-.43-.07,1.2,1.2,0,0,0-.55.12,1.35,1.35,0,0,0-.4.35,1.75,1.75,0,0,0-.26.51,2.37,2.37,0,0,0-.08.61,2.2,2.2,0,0,0,.09.64,1.82,1.82,0,0,0,.26.5,1.21,1.21,0,0,0,.41.34,1.18,1.18,0,0,0,.53.12,1.31,1.31,0,0,0,.41-.07,1.09,1.09,0,0,0,.42-.23,1.41,1.41,0,0,0,.33-.47A2,2,0,0,0,54.59,21.7Z"></path><path class="cls-1" d="M56.77,18a.58.58,0,0,1,.18-.42.54.54,0,0,1,.42-.18.57.57,0,0,1,.43.18A.58.58,0,0,1,58,18a.58.58,0,0,1-.18.43.57.57,0,0,1-.43.18.54.54,0,0,1-.42-.18A.58.58,0,0,1,56.77,18Zm.13,1.33h.93v4.52a.16.16,0,0,1-.12.16,1,1,0,0,1-.33,0A1.16,1.16,0,0,1,57,24a.16.16,0,0,1-.13-.16Z"></path><path class="cls-1" d="M62.4,23.51h0a1.49,1.49,0,0,1-.6.39,2,2,0,0,1-.77.15,2.27,2.27,0,0,1-.93-.19,1.92,1.92,0,0,1-.67-.52,2.33,2.33,0,0,1-.41-.76,3.12,3.12,0,0,1-.14-.93,2.89,2.89,0,0,1,.15-.94,2.28,2.28,0,0,1,.42-.75,1.89,1.89,0,0,1,.65-.51,1.83,1.83,0,0,1,.82-.18,2.08,2.08,0,0,1,.87.16,1.8,1.8,0,0,1,.61.4h0v-.44h.93v4.35a3.26,3.26,0,0,1-.12.9,2,2,0,0,1-.39.75,2,2,0,0,1-.68.5,2.43,2.43,0,0,1-1,.18H59.88a.16.16,0,0,1-.16-.09.71.71,0,0,1,0-.3.78.78,0,0,1,0-.32.16.16,0,0,1,.16-.09h1.18a1.16,1.16,0,0,0,1-.44,1.89,1.89,0,0,0,.33-1.17Zm0-1.9a1.89,1.89,0,0,0-.14-.77,1.46,1.46,0,0,0-.33-.48,1.13,1.13,0,0,0-.42-.24,1.64,1.64,0,0,0-.42-.06,1.17,1.17,0,0,0-.52.12,1.2,1.2,0,0,0-.41.33,1.53,1.53,0,0,0-.26.51,2.08,2.08,0,0,0-.09.63,2.51,2.51,0,0,0,.08.62,1.4,1.4,0,0,0,.26.5,1.22,1.22,0,0,0,.4.35,1.08,1.08,0,0,0,.54.13,1.39,1.39,0,0,0,.44-.07,1.1,1.1,0,0,0,.43-.25,1.48,1.48,0,0,0,.31-.51A2.08,2.08,0,0,0,62.4,21.61Z"></path><path class="cls-1" d="M69.5,20.79a.75.75,0,0,0,0-.26.7.7,0,0,0-.15-.23.81.81,0,0,0-.24-.17,1,1,0,0,0-.68,0,.84.84,0,0,0-.23.18.75.75,0,0,0-.15.24.67.67,0,0,0,0,.24v3a.17.17,0,0,1-.13.16,1.09,1.09,0,0,1-.34,0,1,1,0,0,1-.33,0,.16.16,0,0,1-.13-.16v-3a.74.74,0,0,0-.05-.25.72.72,0,0,0-.14-.24.61.61,0,0,0-.24-.17.89.89,0,0,0-.34-.07.86.86,0,0,0-.34.07.92.92,0,0,0-.24.17.65.65,0,0,0-.15.23.67.67,0,0,0,0,.24v3a.17.17,0,0,1-.13.16A1.09,1.09,0,0,1,65,24a1.05,1.05,0,0,1-.34,0,.16.16,0,0,1-.13-.16V19.39h.9v.43a1.1,1.1,0,0,1,.43-.39,1.51,1.51,0,0,1,.76-.16,1.22,1.22,0,0,1,.69.18,1.14,1.14,0,0,1,.38.44,1.25,1.25,0,0,1,.48-.46,1.73,1.73,0,0,1,.82-.16,1.47,1.47,0,0,1,.66.13,1.29,1.29,0,0,1,.44.36,1.5,1.5,0,0,1,.24.51,2.35,2.35,0,0,1,.08.6v2.94a.17.17,0,0,1-.13.16,1.47,1.47,0,0,1-.68,0,.17.17,0,0,1-.13-.16Z"></path><path class="cls-1" d="M79.42,23.81c0,.14-.16.2-.48.2a1.16,1.16,0,0,1-.35,0,.17.17,0,0,1-.13-.16V21.12H75.6v2.69c0,.14-.16.2-.48.2s-.48-.06-.48-.2v-6.2h1v2.68h2.86V17.61h1Z"></path><path class="cls-1" d="M82.8,24.05a2.55,2.55,0,0,1-1-.19,2.16,2.16,0,0,1-.72-.5,2.34,2.34,0,0,1-.46-.76,2.94,2.94,0,0,1-.15-.94,2.83,2.83,0,0,1,.15-.93A2.34,2.34,0,0,1,81.1,20a2.05,2.05,0,0,1,.72-.51,2.38,2.38,0,0,1,1-.19,2.35,2.35,0,0,1,1,.19,2,2,0,0,1,.73.51,2.34,2.34,0,0,1,.46.76,2.84,2.84,0,0,1,.16.93,2.94,2.94,0,0,1-.16.94,2.34,2.34,0,0,1-.46.76,2.11,2.11,0,0,1-.73.5A2.52,2.52,0,0,1,82.8,24.05Zm0-.79a1.28,1.28,0,0,0,.59-.13,1.18,1.18,0,0,0,.43-.34,1.8,1.8,0,0,0,.28-.51,2.11,2.11,0,0,0,.09-.62,2,2,0,0,0-.09-.61,1.8,1.8,0,0,0-.28-.51,1.47,1.47,0,0,0-.43-.35,1.41,1.41,0,0,0-.59-.12,1.37,1.37,0,0,0-.58.12,1.35,1.35,0,0,0-.43.35,1.56,1.56,0,0,0-.27.51,1.74,1.74,0,0,0-.1.61,1.83,1.83,0,0,0,.1.62,1.56,1.56,0,0,0,.27.51,1.1,1.1,0,0,0,.43.34A1.24,1.24,0,0,0,82.8,23.26Z"></path><path class="cls-1" d="M87.56,24.14a2.74,2.74,0,0,1-.48,0l-.46-.1c-.15,0-.28-.09-.39-.13L86,23.76a.46.46,0,0,1-.12-.13.71.71,0,0,1,.05-.3.57.57,0,0,1,.15-.27.19.19,0,0,1,.19,0,5.13,5.13,0,0,0,.66.21,2.44,2.44,0,0,0,.62.09,1.48,1.48,0,0,0,.74-.16.52.52,0,0,0,.3-.47.37.37,0,0,0-.06-.21.76.76,0,0,0-.18-.18,1.85,1.85,0,0,0-.32-.17L87.55,22l-.49-.18a3.84,3.84,0,0,1-.49-.27,1.6,1.6,0,0,1-.38-.4,1.06,1.06,0,0,1-.15-.58,1.22,1.22,0,0,1,.13-.59,1.53,1.53,0,0,1,.37-.43,1.63,1.63,0,0,1,.55-.25,2.48,2.48,0,0,1,.68-.09,2.12,2.12,0,0,1,.44,0l.4.09a2,2,0,0,1,.32.11l.2.1.08.06a.16.16,0,0,1,0,.07.24.24,0,0,1,0,.12.49.49,0,0,1,0,.18.62.62,0,0,1-.16.28.17.17,0,0,1-.17,0l-.29-.11a1.34,1.34,0,0,0-.26-.09l-.25,0-.3,0a1.43,1.43,0,0,0-.29,0,1,1,0,0,0-.26.11.66.66,0,0,0-.18.19.52.52,0,0,0-.07.25.49.49,0,0,0,.07.25.73.73,0,0,0,.2.19,1.91,1.91,0,0,0,.32.16l.43.17.58.23a2.06,2.06,0,0,1,.49.26,1.29,1.29,0,0,1,.34.36,1.09,1.09,0,0,1,.12.53,1.15,1.15,0,0,1-.14.57,1.38,1.38,0,0,1-.39.45,1.83,1.83,0,0,1-.61.3A2.67,2.67,0,0,1,87.56,24.14Z"></path><path class="cls-1" d="M91.45,25.84q0,.21-.48.21a1,1,0,0,1-.33-.05.16.16,0,0,1-.12-.16V19.39h.93v.49h0a1.59,1.59,0,0,1,.61-.45,2.1,2.1,0,0,1,.88-.16,1.86,1.86,0,0,1,.82.18,1.89,1.89,0,0,1,.65.51,2.28,2.28,0,0,1,.42.75,2.89,2.89,0,0,1,.15.94,3.12,3.12,0,0,1-.14.93,2.33,2.33,0,0,1-.41.76,2.06,2.06,0,0,1-.68.52,2.28,2.28,0,0,1-.94.19,2.06,2.06,0,0,1-.76-.15,1.49,1.49,0,0,1-.6-.39h0Zm0-4.23a2.08,2.08,0,0,0,.13.81,1.34,1.34,0,0,0,.31.51,1.1,1.1,0,0,0,.43.25,1.39,1.39,0,0,0,.44.07,1.08,1.08,0,0,0,.54-.13,1.25,1.25,0,0,0,.41-.35,1.58,1.58,0,0,0,.26-.5,2.51,2.51,0,0,0,.08-.62A2.08,2.08,0,0,0,94,21a1.6,1.6,0,0,0-.27-.5,1.2,1.2,0,0,0-.41-.33,1.11,1.11,0,0,0-.52-.12,1.67,1.67,0,0,0-.42.07,1.09,1.09,0,0,0-.42.23,1.31,1.31,0,0,0-.33.47A1.89,1.89,0,0,0,91.45,21.61Z"></path><path class="cls-1" d="M96.05,18a.58.58,0,0,1,.18-.42.54.54,0,0,1,.42-.18.57.57,0,0,1,.43.18.58.58,0,0,1,.18.42.58.58,0,0,1-.18.43.57.57,0,0,1-.43.18.54.54,0,0,1-.42-.18A.58.58,0,0,1,96.05,18Zm.13,1.33h.93v4.52A.16.16,0,0,1,97,24a1,1,0,0,1-.33,0,1.16,1.16,0,0,1-.35,0,.16.16,0,0,1-.13-.16Z"></path><path class="cls-1" d="M100.18,20.19v2.55a.4.4,0,0,0,.1.32.47.47,0,0,0,.3.08h.63a.2.2,0,0,1,.17.08.78.78,0,0,1,.05.32.72.72,0,0,1-.05.32.19.19,0,0,1-.17.07h-.85a2.14,2.14,0,0,1-.45-.05.87.87,0,0,1-.35-.2.8.8,0,0,1-.23-.35,1.31,1.31,0,0,1-.09-.52V20.19h-.92v-.8h.92V18.07h.94v1.32h1.06c.14,0,.22.13.22.4a.58.58,0,0,1-.06.31.16.16,0,0,1-.16.09Z"></path><path class="cls-1" d="M103.05,20.19a.17.17,0,0,1-.16-.09.82.82,0,0,1,0-.32.74.74,0,0,1,0-.3.17.17,0,0,1,.16-.09h1.57a1.78,1.78,0,0,1,1.25.36,1.66,1.66,0,0,1,.39,1.24v2.82a.16.16,0,0,1-.12.16,1.06,1.06,0,0,1-.33,0c-.32,0-.48-.06-.48-.2h0a4,4,0,0,1-1.45.3,2.08,2.08,0,0,1-.63-.09,1.27,1.27,0,0,1-.51-.28,1.29,1.29,0,0,1-.35-.47,1.86,1.86,0,0,1-.13-.7,1.6,1.6,0,0,1,.14-.67,1.36,1.36,0,0,1,.38-.5,1.81,1.81,0,0,1,.58-.32,2.37,2.37,0,0,1,.72-.1,3.71,3.71,0,0,1,.67.06l.58.13V21a.82.82,0,0,0-.18-.58.8.8,0,0,0-.59-.18Zm1.07,1.57a1,1,0,0,0-.69.21A.76.76,0,0,0,104,23.3a3.36,3.36,0,0,0,.71-.08,6,6,0,0,0,.63-.19V22l-.58-.13A3.21,3.21,0,0,0,104.12,21.76Z"></path><path class="cls-1" d="M107.5,17.43h.94v6.38a.16.16,0,0,1-.13.16,1,1,0,0,1-.33,0c-.32,0-.48-.06-.48-.2Z"></path><path class="cls-1" d="M12.82,25.64H0V0H3.2V22.44h9.62a9.62,9.62,0,0,0,0-19.24V0A12.82,12.82,0,0,1,25.64,12.82,12.82,12.82,0,0,1,12.82,25.64Z"></path><path class="cls-1" d="M12.9,19.23H6.41V0h3.2V16H12.9a3.21,3.21,0,0,0,0-6.42h-.08V6.41h.08a6.35,6.35,0,0,1,4.53,1.88,6.4,6.4,0,0,1,0,9.06,6.46,6.46,0,0,1-4.53,1.88Z"></path></g></g></svg>');
nav_ele += ('		</div>');
// <!-- //logo -->

// <!-- category -->
nav_ele += ('		<ul class="category display_flex">');
// 수정 : 201013
nav_ele += ('			<li><a href="/html/brand-story.html" class="btn_upcoming">Brand story</a></li>');
// nav_ele += ('			<li><a href="/html/guide.html">Design Guideline</a></li>');
nav_ele += ('			<li><a href="/index.html">Design Guideline</a></li>');
nav_ele += ('			<li><a href="/html/faq.html" class="btn_upcoming">Help / FAQ</a></li>');
// 수정 : 201013 - end

nav_ele += ('		</ul>');
// <!-- //category -->

nav_ele += ('	</div>');
nav_ele += ('	<div class="bg"></div>');
nav_ele += ('</div>');

document.write(nav_ele);



$(document).ready(function(){
	if (window_w < 1200) {
		// aside tab으로 변경
		$('header').append('<div class="tab_gnb"><span class="txt"></span></div>');
		$('.tab_gnb').append('<svg width="16" height="10" viewBox="0 0 16 10"><path id="a" d="M16 .333v3.084l-8 6.25-8-6.25V.333l8 6.25z" fill="currentColor"></path></svg>');
	}

	if (window_w < 900){
		var menu_ico_el = '' ;

		menu_ico_el += '<div class="ico_menu btn_menu">';
		menu_ico_el += '	<div class="top"></div>';
		menu_ico_el += '	<div class="bottom"></div>';
		menu_ico_el += '</div>';

		$('.logo').parent().append(menu_ico_el);
	}

	// 카테고리 색상 변경
	$('.category a.on').removeClass('em');
	$('.category a').each(function(){
		var url = $(location).attr('href');
		var href = $(this).attr('href');

		if (url.indexOf(href) > 0){
			$(this).addClass('em');
		}
	});

	// 로고 변경
	var theme = $('body').attr('theme') || 'light';
	if (theme !== 'dark') {
		$('.logo g').attr('fill','#000000');
	}

	return false;
});

// 홈으로
$(document).on('click','.btn_go_home', function(){
	location.href="/index.html";

	return false;
});

// scroll 시 header
var lastScrollTop = 0;
var bd_theme = $('body').attr('theme');
var hd_theme = $('header').attr('theme');
var hd_theme_contrast = hd_theme == 'light'? 'dark' : 'light';
var doc_name = $('body').attr('class');

$(window).scroll(function(e){

	var st = $(this).scrollTop();

	if (st > lastScrollTop){	// downscroll code
		if (window_w < 1200){
			$('header .layout').hide();
		} else {
			$('header').hide();
			$('aside').removeClass('on_header');
		}
	} else if (st == 0) {
		if (window_w > 1200){
			$('header').attr('theme', hd_theme);
			$('.bg').slideUp(200);
		}
		$('aside').removeClass('on_header');
	} else {	// upscroll code

		if (window_w < 1200){
			$('header .layout').show();
		} else {
			if (bd_theme == 'light'){
				$('header').attr('theme', hd_theme_contrast).show();
			} else {
				$('header').show();
			}
			$('aside').addClass('on_header');
			$('header .bg').show();
		}
	}
	lastScrollTop = st;

	return false;
});

$(document).on('click','.btn_menu', function(){
	var is_open = $(this).hasClass('on');

	if (is_open){
		$(this).removeClass('on');
	} else {
		$(this).addClass('on');
	}

	return false;
});

$(document).on('click', '.btn_upcoming', function(){
	popAlert('','작업 준비 중입니다.');

	return false;
});

$(document).on('click','.tab_gnb', function(){
	$('aside').show();

	return false;
});
