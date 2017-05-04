package org.gwtproject.gwt2.client;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

/**
 * Created by Joe on 5/3/2017.
 */
@RemoteServiceRelativePath("dosomething")
public interface Gwt2Service extends RemoteService {
    String doSomething(String name) throws IllegalArgumentException;
}
