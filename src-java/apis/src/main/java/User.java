//Class that represents a user of the program
public class User {

    private String username;
    private String password;
    private String accountType; //Deliver or customer


    /*
     * Constructor(s)
     */
    public User(String username, String password, String accountType) {
        this.username = username;
        this.password = password;
        this.accountType = accountType;
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

    /* Method that returns the account type of the user, if they're a customer or deliverer
     * @ Parameters: None
     * @ Returns: String that represents the type of user
     * @Throws: None
     */
    public String getAccountType() { return accountType; }

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

    /* Method that sets the account type
     * @ Parameters: String that represents the new account type
     * @ Return: None
     * @Throws: None
     */
    public void setAccountType(String accountType) { this.accountType = accountType; }
}
