

declare module d3_timer{
    interface Timer{
        stop():void;
    }
    
    function timer(callback: Function) : Timer;

    function now():number;
}