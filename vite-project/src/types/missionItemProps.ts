import { Mission } from "./mission";
export interface MissionItemProps {
  mission: Mission;
  deleteTodo: (id: string) => Promise<void>;
  toggleCompletion: (id: string) => Promise<string> {
    
  };
}