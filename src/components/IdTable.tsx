import { useState } from 'react';

export function IdTable() {
   const [selectedId, setSelectedId] = useState(null); // 創建一個狀態變量

   function handleIdClick(id: any) {
      setSelectedId(id); // 設置所選的故事 ID 為一個狀態
   }

   return (
      <table>
         <tr>
            <td>
               <button onClick={() => handleIdClick('653bfe7c9e5ec270480c9bff')}>
                  653bfe7c9e5ec270480c9bff
               </button>
               <button onClick={() => handleIdClick('abc123')}>
                  abc123
               </button>
               <button onClick={() => handleIdClick('xyz789')}>
                  xyz789
               </button>
            </td>
         </tr>
      </table >
   );
}
