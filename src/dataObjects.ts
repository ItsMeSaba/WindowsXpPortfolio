
export interface WindowSettings {
    isOpened: boolean,
	header: string,
	path: string,
	id: string,
	previousPage: null | string,
    isMinimized: boolean,
    currentPage: string,
    highestZindex: React.MutableRefObject<number>,
    zIndex: number,
    open: () => any,
    minimize: () => any,
    unMinimize: () => any,
    close: () => any,
    setZindex: () => any
    setPath: (newPath: string) => any,
}

interface ProjectsWindowSettingsArgs {
    id: string,
    header: string,
    highestZindex: React.MutableRefObject<number>,
}

export const projectsWindowSettings = (args: ProjectsWindowSettingsArgs): WindowSettings => ({
	isOpened: false,
    isMinimized: false,
	header: args.header,
	path: "projects/",
	id: args.id,
    currentPage: "index",
	previousPage: null,
    zIndex: 1,
    highestZindex: args.highestZindex,
    setZindex: function() {
        // console.log()
        this.highestZindex.current++;

        return ({ ...this, zIndex: this.highestZindex.current })
    },
    open: function() {
        this.highestZindex.current++;

        return ({ ...this, isOpened: true, isMinimized: false, zIndex: this.highestZindex.current })
    },
    minimize: function() {
        return ({ ...this, isMinimized: true });
    },
    unMinimize: function() {
        this.highestZindex.current++;

        return ({ ...this, isMinimized: false, zIndex: this.highestZindex.current });
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