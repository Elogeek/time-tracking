
export const TodoTasks = {

    init: function(){
        // @ts-ignore
        this.containerParent();
        // @ts-ignore
        this.list();
    },

    containerParent(parent: HTMLDivElement) {
        // @ts-ignore
        this.parent = document.querySelector(".project");
    },

     list: function(name: string) {
        // @ts-ignore

        let container = document.createElement("div") as HTMLDivElement;
        container.className = "todo";
        // @ts-ignore
        this.parent.append(container);

        let list = document.createElement("p") as HTMLParagraphElement;
        list.className = "todoTasks";
        container.append(list);

        /** chrono here*/

        let line = document.createElement("hr") as HTMLElement;
        // @ts-ignore
         this.parent.append(line);

    },
}
