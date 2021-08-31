declare const useComponentCommon: <T extends {
    [key: string]: any;
}>(props: T, picks: string[]) => {
    styleProps: import("vue").ComputedRef<Pick<T, string>>;
    handleClick: () => void;
};
export default useComponentCommon;
