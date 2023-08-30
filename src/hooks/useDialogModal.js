import { useCallback, useState } from "react";

//return component back to us
export default function useDialogModal(Component) {
    const [open, setOpen] = useState(false);

    const openDialog = useCallback(() => {
        setOpen(true);
    }, []); //don't want this to change in any arguments, so pass in an empty array
    
    const DialogComponent = useCallback(({...props}) => {

        if(!open) return null;

        if (Component) {
            return (
                <Component open={open} onClose={() => setOpen(false)} {...props} />
            )
        }
    }, [open, Component]);

    return [DialogComponent, openDialog]
}