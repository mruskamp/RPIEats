//Class that represents a user of the program
public class User {

    private String username;
    private String password;

    //Default constructor
    public User() {

    }

    /* Method that returns the username of the user
     * @ Parameters: None
     * @ Return: String that represents the username
     * @Throws: None
     */
    public String getUsername() { return username; }

    /* Method that returns the password of the user
     * @ Parameters: None
     * @ Return: String that represents the password
     * @Throws: None
     */
    public String getPassword() { return password; }

    /* Method that sets the username of the user
     * @ Parameters: String that represents the new username
     * @ Return: None
     * @Throws: None
     */
    public void setUsername(String username) { this.username = username; }

    /* Method that sets the password of the user
     * @ Parameters: String that represents the new password
     * @ Return: None
     * @Throws: None
     */
    public void setPassword(String password) { this.password = password; }
}
