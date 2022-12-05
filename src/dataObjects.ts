
export interface WindowSettings {
    isOpened: boolean,
	header: string,
	path: string,
	id: string,
	previousPage: null | string,
    isMinimized: boolean,
    currentPage: string,
    open: () => any,
    minimize: () => any,
    unMinimize: () => any,
    close: () => any,
    setPath: (newPath: string) => any,
}

export const projectsWindowSettings = (): WindowSettings => ({
	isOpened: false,
    isMinimized: false,
	header: "Projects",
	path: "projects/",
	id: "projectsWindow",
    currentPage: "index",
	previousPage: null,
    open: function() {
        return ({ ...this, isOpened: true, isMinimized: false })
    },
    minimize: function() {
        return ({ ...this, isMinimized: true });
    },
    unMinimize: function() {
        return ({ ...this, isMinimized: false });
    }, 
    close: function() {
        return ({ ...this, isOpened: false });
    },
    setPath: function(newPath: string) {
        return ({ ...this, path: newPath })
    }
});

// export function minimize(settings: WindowSettings): WindowSettings {
//     return ({
//         ...settings,
//         isOpened: false,
//     })
// }

export function minimize(setSettings: React.Dispatch<React.SetStateAction<WindowSettings>>) {
    setSettings(settings => ({
        ...settings,
        isMinimized: true,
    }))
}

// export function openProjectsWindow(settings: WindowSettings) {
//     if (settings.isOpened) return ({
//         ...settings,
//         isMinimized: false
//     })

//     return ({
//         ...settings,
//         isOpened: true,
//     })
// } 


export function openProjectsWindow(setSettings: React.Dispatch<React.SetStateAction<WindowSettings>>) {
    setSettings(settings => {
        // setBarItems(items => [...items, settings.id]);

        if (settings.isOpened) return ({ ...settings, isMinimized: false });

        return ({ ...settings, isOpened: true });
    })
}