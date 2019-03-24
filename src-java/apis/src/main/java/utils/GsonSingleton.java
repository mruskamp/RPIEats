package utils;

import com.google.gson.Gson;

public class GsonSingleton {

    private static Gson object ;

    public static Gson getInstance(){
        if(object == null){
            object = new Gson();
        }

        return object;
    }
}
