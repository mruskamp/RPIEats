import java.util.ArrayList;

public class Menu {

    private ArrayList<MenuItem> menuContents;

    /*
     * Constructor(s)
     */
    public Menu() {
        
    }

    /*
     * Getters and setters
     */
    public ArrayList<MenuItem> getMenu() { return menuContents; }

    public void setMenu(ArrayList<MenuItem> menuContents) { this.menuContents = menuContents; }



    public boolean addToMenu(MenuItem e) {
        return this.menuContents.add(e);
    }

    public boolean removeFromMenu(MenuItem e) {
        return this.menuContents.remove(e);
    }

}
