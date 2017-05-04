package org.gwtproject.gwt2.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

/**
 * Created by Joe on 5/3/2017.
 */
public interface Gwt2ServiceAsync {
    void doSomething(String input, AsyncCallback<String> callback)
            throws IllegalArgumentException;
}
