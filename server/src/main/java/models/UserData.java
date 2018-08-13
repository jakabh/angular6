package models;

public class UserData implements IUserData {
    private String userName;
    private String password;
    private String imageUrl;

    public UserData(){

    }
    public UserData(String userName, String password, String imageUrl){
        this.userName = userName;
        this.password = password;
        this.imageUrl = imageUrl;
    }
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
