package models;

public class QueryEntity {
    public Double X;
    public Double Y;
    public Double R;
    public boolean result;

    public Double getX() {
        return X;
    }

    public boolean isResult() {
        return result;
    }

    public void check() {
        if ((X == null) || (Y == null) || (R == null))
            throw new NullPointerException();
        result = false;
        if (X >= 0 && Y <= 0 && X <= R && Y <= R) result = true;
        if (X <= 0 && Y >= 0 && ((X * X + Y * Y) <= (R * R))) result = true;
        if (X <= 0 && Y <= 0 && (-X - R >= Y)) result = true;
    }

    public void setX(Double x) {
        X = x;
    }

    public Double getY() {
        return Y;
    }

    public void setY(Double y) {
        Y = y;
    }

    public Double getR() {
        return R;
    }

    public void setR(Double r) {
        R = r;
    }

    public QueryEntity(double x, double y, double r) {
        this.X = x;
        this.Y = y;
        this.R = r;
        check();
    }
}
