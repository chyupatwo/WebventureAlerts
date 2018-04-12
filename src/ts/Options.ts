export default interface AlertOptions{
    title: string;
    message: string;
    container: string;
    dismissible?: boolean;
    placement: InsertPosition;
}