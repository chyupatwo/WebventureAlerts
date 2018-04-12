export default interface AlertOptions{
    title: string;
    message: string;
    container: HTMLElement;
    dismissible?: boolean;
    placement: InsertPosition;
}