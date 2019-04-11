public class User {

    private String username;
    private String password;
    private String accountType;

    /*
     * Constructor(s)
     */
    public User(String username, String password, String accountType) {
        this.username = username;
        this.password = password;
        this.accountType = accountType;
    }

    /*
     * Getters and setters
     */
    public String getUsername() { return username; }

    public String getPassword() { return password; }

    public String getAccountType() { return accountType; }

    public void setUsername(String username) { this.username = username; }

    public void setPassword(String password) { this.password = password; }

    public void setAccountType(String accountType) { this.accountType = accountType; }
}
