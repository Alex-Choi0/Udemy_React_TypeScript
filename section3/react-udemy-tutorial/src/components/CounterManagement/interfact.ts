export interface CounterManagementProps {
    ownerName : string;
    childern? : React.ReactNode;
}

export interface CounterManagementState {
    counter : number;
    users : string[];
    childern? : React.ReactNode;
    
}