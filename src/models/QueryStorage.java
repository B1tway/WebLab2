package models;

import java.util.ArrayList;
import java.util.Stack;

public class QueryStorage {
    private ArrayList<QueryEntity> storage;

    public ArrayList<QueryEntity> getStorage() {
        return storage;
    }
    public void addQuery(QueryEntity entity) {
        storage.add(entity);
    }
    public QueryStorage() {
        storage = new ArrayList<>();
    }
    public int getSizer() {
        return storage.size();
    }
}
