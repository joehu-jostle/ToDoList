package org.gwtproject.dosomething.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

/**
 * Created by Joe on 5/3/2017.
 */
public interface SomeServiceAsync {
    void doSomething(String input, AsyncCallback<String> callback)
            throws IllegalArgumentException;
}
